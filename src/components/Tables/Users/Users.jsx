import React from "react";


const id = {
    "1": {
        number_rep: "653262",
        date: "13.01.2019",
        name: "Иванов Иван Сергеевич",
        number_tab: "444221",
        dev: "Information Developer",
        works: "ГИВЦ"
    },
    "2": {
        number_rep: "656763",
        date: "15.08.2019",
        name: "Рубин Алексей Александрович",
        number_tab: "444202",
        dev: "Менеджер",
        works: "ГИВЦ"
    },
    "3": {
        number_rep: "453264",
        date: "03.12.2019",
        name: "Тудас Ольга Ивановна",
        number_tab: "443402",
        dev: "Начальник участка",
        works: "ГИВЦ"
    },
    "4": {
        number_rep: "153265",
        date: "29.09.2019",
        name: "Сидоров Александр Сергеевич",
        number_tab: "446702",
        dev: "Менеджер",
        works: "ГИВЦ"
    },
    "5": {
        number_rep: "689062",
        date: "13.01.2019",
        name: "Мужихоев Роман Дмитриевич",
        number_tab: "446572",
        dev: "Information Developer",
        works: "ГИВЦ"
    },
    "6": {
        number_rep: "436262",
        date: "21.10.2019",
        name: "Кобылин Ярослав Владимирович",
        number_tab: "434202",
        dev: "Information Developer",
        works: "ГИВЦ"
    },
    "7": {
        number_rep: "355762",
        date: "08.01.2019",
        name: "Поляков Роман Алексеевич",
        number_tab: "434902",
        dev: "Менеджер",
        works: "ГИВЦ"
    },
    "8": {
        number_rep: "953212",
        date: "01.03.2019",
        name: "Щигрева Дарья Владимировна",
        number_tab: "490802",
        dev: "Information Developer",
        works: "ГИВЦ"
    },
    "9": {
        number_rep: "111262",
        date: "12.02.2019",
        name: "Саратцев Андрей Владимирович",
        number_tab: "447302",
        dev: "Главный механик",
        works: "ГИВЦ"
    },
    "10": {
        number_rep: "255212",
        date: "05.03.2019",
        name: "Апанасенко Захар Андреевич",
        number_tab: "441202",
        dev: "Бригадир",
        works: "ГИВЦ"
    },
    "11": {
        number_rep: "863122",
        date: "18.04.2019",
        name: "Семёнова Ольга Викторовна",
        number_tab: "444111",
        dev: "Information Developer",
        works: "ГИВЦ"
    },
    "12": {
        number_rep: "234262",
        date: "26.11.2019",
        name: "Алексеев Андрей Михайлович",
        number_tab: "444882",
        dev: "Помощник менеджера",
        works: "ГИВЦ"
    },
    "13": {
        number_rep: "987262",
        date: "20.07.2019",
        name: "Сергеев Пётр Виктрович",
        number_tab: "444002",
        dev: "Менеджер",
        works: "ГИВЦ"
    }
}

export const Zlp = ({ids, valuer}) => {
    if (valuer === "number_rep") {
        return (
            <span>{id[`${ids}`].number_rep}</span>
        );
    }
    if (valuer === "date") {
        return (
            <span>{id[`${ids}`].date}</span>
        );
    }
    if (valuer === "name") {
        return (
            <span>{id[`${ids}`].name}</span>
        );
    }
    if (valuer === "number_tab") {
        return (
            <span>{id[`${ids}`].number_tab}</span>
        );
    }
    if (valuer === "dev") {
        return (
            <span>{id[`${ids}`].dev}</span>
        );
    }
    if (valuer === "works") {
        return (
            <span>{id[`${ids}`].works}</span>
        );
    }
    alert("Такого св-ва не существует!");
    return null;
}

const Users = ({ids}) => {
    if (id[`${ids}`] === undefined) {
        alert("Пользователь не найден!");
        return null;
    }

    return(
        <>
            <td>{id[`${ids}`].number_rep}</td>
            <td>{id[`${ids}`].date}</td>
            <td>{id[`${ids}`].name}</td>
            <td>{id[`${ids}`].number_tab}</td>
            <td>{id[`${ids}`].dev}</td>
            <td>{id[`${ids}`].works}</td>
        </>
    )
}

export default Users