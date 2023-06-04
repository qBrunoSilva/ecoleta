import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { IGodFather } from "src/types/GodFather";

export interface ColumnProps {
  dataKey: string;
  title: string;
  body: (item: any) => JSX.Element;
}

interface IHeaderProps {
  nome: string;
  cnpj?: string;
}

interface Props {
  header: IHeaderProps | undefined;
  godFathers: IGodFather[];
}

export async function generateGodFatherPDF({ header, godFathers }: Props) {
  const doc = new jsPDF();

  const today = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const totalPagesExp = "{total_pages_count_string}";

  let space = 60;

  doc.setFontSize(12);
  space += 1;
  doc.text(`Quantidade listado: ${godFathers.length}`, 150, space - 2.5);

  autoTable(doc, {
    columns: ["Nome", "CNPJ", "Contribuição"],
    body: godFathers.map((row) => [row.name, row.cnpj, row.contribution]),
    margin: { top: space },
    styles: {
      fontSize: 8,
      minCellWidth: 18,
    },
    didDrawPage: () => {
      let str = `Página ${doc.getNumberOfPages()}`;
      if (typeof doc.putTotalPages === "function") {
        str = `${str} de ${totalPagesExp}`;
      }

      doc.setFontSize(14);

      doc.text(header?.nome || "", 15, 25);
      doc.setFontSize(12);
      doc.text(header?.cnpj || "", 15, 30);
      doc.text("Relatório dos Padrinhos", 80, 47);
      doc.setFont("default", "normal");
      doc.line(5, 50, 205, 50);

      doc.setFontSize(10);

      doc.setFontSize(8);
      doc.text(`${today}`, 7, 7);
      doc.text(str, 188, 7);
      doc.setFontSize(10);
    },
  });

  if (typeof doc.putTotalPages === "function") {
    doc.putTotalPages(totalPagesExp);
  }

  const file_name = `Produtos_${today
    .replaceAll("/", "_")
    .replaceAll(":", "")
    .replaceAll(" ", "")}.pdf`;

  // eslint-disable-next-line no-unsafe-finally
  return doc.save(file_name, { returnPromise: true }).finally(() => {
    doc.autoPrint();
  });
}
