/**
 * 洗牌
 * @param {*} array
 * @returns
 */
import {Card} from "../Card";

export function shuffle(array: any[]) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  let index = -1;
  const lastIndex = length - 1;
  const result = [...array];
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
}

/**
 * 牌组排序
 * @param array
 */
export function orderPai(array: Card[]) {
  const wPai = array
    .filter((item) => item.type === "W")
    .sort((a, b) => a.number - b.number);
  const bPai = array
    .filter((item) => item.type === "B")
    .sort((a, b) => a.number - b.number);
  const tPai = array
    .filter((item) => item.type === "T")
    .sort((a, b) => a.number - b.number);
  return [...wPai, ...bPai, ...tPai];
}
