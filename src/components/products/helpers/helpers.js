export function isAllFieldsInProductCorrect({
  name,
  quantity,
  price,
  categoryID,
}) {
  let errMsg = "";
  if (!name) {
    errMsg += "Product name can not be empty";
  }
  if (quantity === "") {
    errMsg += ", product quantity can not be empty";
  }
  if (quantity < 0) {
    errMsg += ", product quantity can not be negative";
  }
  if (price === "") {
    errMsg += ", product price can not be empty";
  }
  if (price < 0) {
    errMsg += ", product price can not be negative";
  }
  if (categoryID === "") {
    errMsg += ", product category can not be empty";
  }
  return errMsg;
}
