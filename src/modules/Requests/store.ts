import { observable, action } from "mobx";

class Requests {
    constructor() {
        this.fetchRequests();
    }

    @observable isRequestOpen: boolean[] = [];
    @observable isRequestBookes: boolean[] = [];
    @observable requests: IBecomeDoctor[] = [];
    @observable isListView: boolean = false;

    @action fetchRequests = async (): Promise<void> => {
        this.requests = [
            {
                name: "Иван",
                surname: "Иванов",
                phone: "79028319028",
                email: "ivanov_ivan@mail.ru",
                password: "ivanovcoolguy911",
                education: "МГУ",
                speciality: "Терапевт",
                yearEducation: "2015 - 2020",
                blankSeries: "12345678",
                blankNumber: "12345678",
                issueDate: "26.07.2020",
                passportIssueDate: "21.11.2015",
                passportIssuedByWhom: "МВД г. Москвы",
                passportSeries: "123123",
                workExperience: "1 год",
                workPlaces: "Городская поликлиника №1 г. Москва",
            },
            {
                name: "Иван",
                surname: "Иванов",
                phone: "79028319028",
                email: "ivanov_ivan@mail.ru",
                password: "ivanovcoolguy911",
                education: "МГУ",
                speciality: "Терапевт",
                yearEducation: "2015 - 2020",
                blankSeries: "12345678",
                blankNumber: "12345678",
                issueDate: "26.07.2020",
                passportIssueDate: "21.11.2015",
                passportIssuedByWhom: "МВД г. Москвы",
                passportSeries: "123123",
                workExperience: "1 год",
                workPlaces: "Городская поликлиника №1 г. Москва",
            },
            {
                name: "Иван",
                surname: "Иванов",
                phone: "79028319028",
                email: "ivanov_ivan@mail.ru",
                password: "ivanovcoolguy911",
                education: "МГУ",
                speciality: "Терапевт",
                yearEducation: "2015 - 2020",
                blankSeries: "12345678",
                blankNumber: "12345678",
                issueDate: "26.07.2020",
                passportIssueDate: "21.11.2015",
                passportIssuedByWhom: "МВД г. Москвы",
                passportSeries: "123123",
                workExperience: "1 год",
                workPlaces: "Городская поликлиника №1 г. Москва",
            },
            {
                name: "Иван",
                surname: "Иванов",
                phone: "79028319028",
                email: "ivanov_ivan@mail.ru",
                password: "ivanovcoolguy911",
                education: "МГУ",
                speciality: "Терапевт",
                yearEducation: "2015 - 2020",
                blankSeries: "12345678",
                blankNumber: "12345678",
                issueDate: "26.07.2020",
                passportIssueDate: "21.11.2015",
                passportIssuedByWhom: "МВД г. Москвы",
                passportSeries: "123123",
                workExperience: "1 год",
                workPlaces: "Городская поликлиника №1 г. Москва",
            },
        ];

        this.isRequestOpen = this.requests.map(() => false);
        this.isRequestBookes = [...this.isRequestOpen];
    };

    @action triggerRequestOpenOrClose = (i: number) => {
        this.isRequestOpen[i] = !this.isRequestOpen[i];
    };

    @action triggerBookRequest = (i: number) => {
        this.isRequestBookes[i] = !this.isRequestBookes[i];
    };

    @action setIsListView = (val: boolean) => (this.isListView = val);
}

export default new Requests();
