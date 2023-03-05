export = Nisqa;
export as namespace Nisqa;

declare namespace Nisqa {
  interface Item {
    tile: string;
    description: string;
    status: 'pending' | 'approved' | 'rejected';
    tags: string[];
    text: string;
  }
}
