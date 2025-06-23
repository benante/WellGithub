import { Repo } from './types/types';

const sortBy = (array: Repo[], param: string): Repo[] => {
  switch (param) {
    case 'alphabet':
      return array.sort((objectA, objectB) =>
        objectA.name.localeCompare(objectB.name)
      );
    case 'last-update':
      return array.sort(
        (objectA, objectB) =>
          new Date(objectB.updated_at).getTime() -
          new Date(objectA.updated_at).getTime()
      );
    case 'last-commit':
      return array.sort(
        (objectA, objectB) =>
          new Date(objectB.pushed_at).getTime() -
          new Date(objectA.pushed_at).getTime()
      );
    case 'oldest':
      return array.sort(
        (objectA, objectB) =>
          new Date(objectA.created_at).getTime() -
          new Date(objectB.created_at).getTime()
      );
    case 'newest':
      return array.sort(
        (objectA, objectB) =>
          new Date(objectB.created_at).getTime() -
          new Date(objectA.created_at).getTime()
      );
    case 'language':
      return array.sort((objectA, objectB) =>
        (objectA.language ?? '').localeCompare(objectB.language ?? '')
      );
    default:
      return array;
  }
};

export const chunkArray = (arr: number[], size: number): number[][] => {
  let finalArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0) {
      finalArray.push(arr.slice(i, i + size));
    }
  }
  return finalArray;
};

export default sortBy;
