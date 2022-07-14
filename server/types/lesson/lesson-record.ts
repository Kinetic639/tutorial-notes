export interface NewLessonRecord extends Omit<LessonEntity, 'id'> {
    id?: string;
}

export interface LessonEntity {
    id: string;
    url: string;
    createdAt: string;
    isImportant: number;
    userId: string;
}
