import { Repo } from './app/types/types';

const sortBy = (array: Repo[], param: string) => {
  switch (param) {
    case 'last-updated':
      return array.sort(
        (objectA, objectB) =>
          new Date(objectB.updated_at).getTime() -
          new Date(objectA.updated_at).getTime()
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
    default:
      return array;
  }
};
