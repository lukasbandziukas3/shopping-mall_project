export function isAllFieldsInProductCorrect({
  name,
  quantity,
  price,
  categoryID,
}:{
  name:string, quantity?: number,price?:number, categoryID?: string,
                                            }
) {
  let errMsg = "";
  if (!name) {
    errMsg += "Product name can not be empty";
  }
  if (quantity === undefined  ) {
    errMsg += ", product quantity can not be empty";
  }
  else if (quantity < 0) {
    errMsg += ", product quantity can not be negative";
  }
  if (price === undefined ) {
    errMsg += ", product price can not be empty";
  }
  else if (price < 0) {
    errMsg += ", product price can not be negative";
  }
  if (categoryID === "") {
    errMsg += ", product category can not be empty";
  }
  return errMsg;
}
