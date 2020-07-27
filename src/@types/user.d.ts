declare interface UserType {
    id?: string;
    name?: string;
    surname?: string;
    photoUrl?: string;
    phone?: number;
    email?: string;
    password?: string;
    sex?: boolean;
    city?: string;
    country?: string;
    consultations?: Consultation[];
    reviews?: Review[];
    notificationEmail?: string;
    sendNotificationToEmail?: boolean;
    sendMailingsToEmail?: boolean;
    createdAt?: Date;
    lastActiveAt?: Date;
}
