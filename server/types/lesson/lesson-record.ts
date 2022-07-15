export interface NewLessonRecord extends Omit<LessonEntity, 'id'> {
    id?: string;
}

export interface LessonEntity {
    id: string;
    videoId: string;
    thumbnail: string;
    title: string;
    author: string;
    description: string;
    createdAt: string;
    isImportant: number;
    userId: string;
    link: string;
}
