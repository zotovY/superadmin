declare interface DoctorType extends UserType {
    education: string;
    yearEducation: [Date, Date];
    blankSeries: string;
    blankNumber: string;
    issueDate: Date;
    speciality: string[];
    beginDoctorDate: Date | null;
    experience: number;
    rating: number;
    whosFavourite: string[];
    clientsReviews: string[];
    clientsConsultations: string[];
    sheldure: string[];
}
