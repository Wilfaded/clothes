const initialState = {
    Users: {
        "1": {
            number_rep: "653262",
            date: "13.01.2019",
            name: "Иванов Иван Сергеевич",
            number_tab: "444221",
            dev: "Information Developer",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "2": {
            number_rep: "656763",
            date: "15.08.2019",
            name: "Рубин Алексей Александрович",
            number_tab: "444202",
            dev: "Менеджер",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "3": {
            number_rep: "453264",
            date: "03.12.2019",
            name: "Тудас Ольга Ивановна",
            number_tab: "443402",
            dev: "Начальник участка",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "4": {
            number_rep: "153265",
            date: "29.09.2019",
            name: "Сидоров Александр Сергеевич",
            number_tab: "446702",
            dev: "Менеджер",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "5": {
            number_rep: "689062",
            date: "13.01.2019",
            name: "Мужихоев Роман Дмитриевич",
            number_tab: "446572",
            dev: "Information Developer",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "6": {
            number_rep: "436262",
            date: "21.10.2019",
            name: "Кобылин Ярослав Владимирович",
            number_tab: "434202",
            dev: "Information Developer",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "7": {
            number_rep: "355762",
            date: "08.01.2019",
            name: "Поляков Роман Алексеевич",
            number_tab: "434902",
            dev: "Менеджер",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "8": {
            number_rep: "953212",
            date: "01.03.2019",
            name: "Щигрева Дарья Владимировна",
            number_tab: "490802",
            dev: "Information Developer",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "9": {
            number_rep: "111262",
            date: "12.02.2019",
            name: "Саратцев Андрей Владимирович",
            number_tab: "447302",
            dev: "Главный механик",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "10": {
            number_rep: "255212",
            date: "05.03.2019",
            name: "Апанасенко Захар Андреевич",
            number_tab: "441202",
            dev: "Бригадир",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "11": {
            number_rep: "863122",
            date: "18.04.2019",
            name: "Семёнова Ольга Викторовна",
            number_tab: "444111",
            dev: "Information Developer",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "12": {
            number_rep: "234262",
            date: "26.11.2019",
            name: "Алексеев Андрей Михайлович",
            number_tab: "444882",
            dev: "Помощник менеджера",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        },
        "13": {
            number_rep: "987262",
            date: "20.07.2019",
            name: "Сергеев Пётр Виктрович",
            number_tab: "444002",
            dev: "Менеджер",
            works: "ГИВЦ",
            reports: {
                "1": {
                    number_rep: "653262",
                    name: "Жилет сигнальный",
                    number_mat: "200905"
                },
                "2": {
                    number_rep: "653262",
                    name: "Галстук",
                    number_mat: "207763"
                },
                "3": {
                    number_rep: "656236",
                    name: "Кожаный ремень",
                    number_mat: "212635"
                },
                "4": {
                    number_rep: "656236",
                    name: "Жилет утепленный",
                    number_mat: "200900"
                }
            }
        }
    },
    Materials: {
        "1": {
            name: "Бензопила",
            count: "314",
            number_mat: "409376",
            number_tab: "157-4006-959",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "3",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "5",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "1",
                    akt_number: "201818"
                }
            }
        },
        "2": {
            name: "Жилет утепленный",
            date: "20.08.2019",
            count: "97",
            number_mat: "234665",
            number_tab: "157-4006-923",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "6",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "3",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "2",
                    akt_number: "201818"
                }
            }
        },
        "3": {
            name: "Мультиметр",
            date: "19.08.2019",
            count: "56",
            number_mat: "104004",
            number_tab: "157-4456-959",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "1",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "9",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "8",
                    akt_number: "201818"
                }
            }
        },
        "4": {
            name: "Индикаторная отвертка",
            date: "18.08.2019",
            count: "110",
            number_mat: "444630",
            number_tab: "107-2406-959",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "8",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "6",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "7",
                    akt_number: "201818"
                }
            }
        },
        "5": {
            name: "Рулетка",
            date: "17.08.2019",
            count: "229",
            number_mat: "954909",
            number_tab: "157-4006-655",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "3",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "2",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "2",
                    akt_number: "201818"
                }
            }
        },
        "6": {
            name: "Перфоратор",
            date: "16.08.2019",
            count: "167",
            number_mat: "442796",
            number_tab: "157-4006-125",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "2",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "1",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "1",
                    akt_number: "201818"
                }
            }
        },
        "7": {
            name: "Фонарь",
            date: "15.08.2019",
            count: "234",
            number_mat: "971298",
            number_tab: "157-4006-434",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "2",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "2",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "1",
                    akt_number: "201818"
                }
            }
        },
        "8": {
            name: "Дисковая пила",
            date: "14.08.2019",
            count: "67",
            number_mat: "476311",
            number_tab: "157-4006-678",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "7",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "5",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "9",
                    akt_number: "201818"
                }
            }
        },
        "9": {
            name: "Электропила",
            date: "13.08.2019",
            count: "128",
            number_mat: "200883",
            number_tab: "157-4006-709",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "3",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "8",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "1",
                    akt_number: "201818"
                }
            }
        },
        "10": {
            name: "Стремянка",
            date: "12.08.2019",
            count: "87",
            number_mat: "354513",
            number_tab: "157-4006-212",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "2",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "6",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "3",
                    akt_number: "201818"
                }
            }
        },
        "11": {
            name: "Болгарка",
            date: "11.08.2019",
            count: "211",
            number_mat: "600542",
            number_tab: "157-4006-754",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "3",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "1",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "12",
                    akt_number: "201818"
                }
            }
        },
        "12": {
            name: "Плиткорез",
            date: "10.08.2019",
            count: "109",
            number_mat: "100173",
            number_tab: "157-4006-269",
            getting: {
                "1": {
                    date_give: "01.07.2019",
                    date_get: "01.07.2019",
                    count_give: "3",
                    akt_number: "201816"
                },
                "2": {
                    date_give: "10.08.2019",
                    date_get: "10.08.2019",
                    count_give: "7",
                    akt_number: "201817"
                },
                "3": {
                    date_give: "21.08.2019",
                    date_get: "21.08.2019",
                    count_give: "2",
                    akt_number: "201818"
                }
            }
        }
    }
}


export default initialState;