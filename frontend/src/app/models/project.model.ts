export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'elevation' | 'plan';
  filename: string;
}
