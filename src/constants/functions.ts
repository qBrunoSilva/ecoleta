export function formataCPF(v: string): string {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return v.substring(0, 14);
}

export function formataCNPJ(v: string): string {
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/, "$1.$2");
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
  v = v.replace(/(\d{4})(\d)/, "$1-$2");
  return v.substring(0, 18);
}

export function formataCelular(v: string): string {
  let r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");

  if (r.length > 11) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 7) {
    r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else if (v.trim() !== "") {
    r = r.replace(/^(\d*)/, "($1");
  }

  return r;
}

export function formataTelefone(value: string): string {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{4,5})(\d{4})/, "$1-$2");

  return value.substring(0, 15);
}
 

export function formatInputMoney(value: string): string {
  if (
    value === "0" ||
    value === "0,0" ||
    value === "0,000" ||
    !value ||
    value === "0.00"
  ) {
    return "0,00";
  }

  if (value === "0,00-") {
    return "-";
  }
  const numero = String(value).replace(/\D/g, "").replace(/^0+/, "");

  let counter = 1;
  let isCommaFound = "notFound";

  const formattedStringReversed = Array.from(numero.toString())
    .reverse()
    .reduce((acc, i, index, arr) => {
      if (counter === 2 && isCommaFound === "notFound" && arr.length > 2) {
        acc = `${acc + i},`;
        isCommaFound = "found";
        counter = 0;
      } else if (counter === 3 && arr.length !== index + 1) {
        acc = `${acc + i}.`;
        counter = 0;
      } else {
        acc += i;
      }

      counter += 1;
      return acc;
    }, "");

  let formattedNumber = Array.from(formattedStringReversed).reverse().join("");

  if (formattedNumber.length === 2) {
    formattedNumber = `0,${formattedNumber}`;
  } else if (formattedNumber.length === 1) {
    formattedNumber = `0,0${formattedNumber}`;
  }

  return value[0] === "-" ? `-${formattedNumber}` : formattedNumber;
}

export function convertStringToNumber(value: string | number): number {
  if (String(Number(value)) !== "NaN") return Number(value);

  const number = String(value)
    .replace("R$", "")
    .replace(".", "")
    .replace(",", ".");

  return Number(number);
}
 