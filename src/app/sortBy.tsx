import { Repo } from './types/types';

const sortBy = (array: Repo[], param: string): Repo[] => {
  switch (param) {
    case 'last-updated':
      console.log('lastUpda');
      return array.sort(
        (objectA, objectB) =>
          new Date(objectB.updated_at).getTime() -
          new Date(objectA.updated_at).getTime()
      );
    case 'oldest':
      console.log('old');
      return array.sort(
        (objectA, objectB) =>
          new Date(objectA.created_at).getTime() -
          new Date(objectB.created_at).getTime()
      );
    case 'newest':
      console.log('new');
      return array.sort(
        (objectA, objectB) =>
          new Date(objectB.created_at).getTime() -
          new Date(objectA.created_at).getTime()
      );
    case 'alphabet':
      return array.sort((objectA, objectB) =>
        objectA.name.localeCompare(objectB.name)
      );
    default:
      return array;
  }
};

export default sortBy;
