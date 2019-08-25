export class ShyftApiMock{

    weeklySchedules = [
        {
            subjectId: "Benjamin Fischer",
            weeklySchedule: {
                0:  [
                    {
                        role: "chef",
                        startHour: 7,
                        startMinute: 30,
                        endHour: 16,
                        endMinute: 50
                    }
                ],
                1:  [
                    {
                        role: "dishwasher",
                        startHour: 8,
                        startMinute: 15,
                        endHour: 15,
                        endMinute: 10
                    }
                ],
                2: [
                    {
                        role: "cashier",
                        startHour: 7,
                        startMinute: 30,
                        endHour: 16,
                        endMinute: 50
                    },
                    {
                        role: "bartender",
                        startHour: 23,
                        startMinute: 30,
                        endHour: 23,
                        endMinute: 59
                    }
                ],
                3: [
                    {
                        role: "chef",
                        startHour: 0,
                        startMinute: 0,
                        endHour: 2,
                        endMinute: 10
                    }
                ],
                4: [],
                5: [],
                6: []
            },
        },

        {
            subjectId: "Arne NoJob",
            weeklySchedule: {
                0: [],
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
            }
        },
        {
            subjectId: "Korven Hansson",
            weeklySchedule: {
                0: [
                    {
                        role: "cleaning",
                        startHour: 6,
                        startMinute: 0,
                        endHour: 18,
                        endMinute: 0
                    }
                ],
                1: [
                    {
                        role: "cleaning",
                        startHour: 16,
                        startMinute: 10,
                        endHour: 17,
                        endMinute: 10
                    }
                ],
                2: [
                    {
                        role: "cleaning",
                        startHour: 9,
                        startMinute: 30,
                        endHour: 12,
                        endMinute: 5
                    },
                    {
                        role: "cleaning",
                        startHour: 6,
                        startMinute: 0,
                        endHour: 18,
                        endMinute: 0
                    }
                ],
                3: [
                    {
                        role: "cleaning",
                        startHour: 6,
                        startMinute: 0,
                        endHour: 18,
                        endMinute: 0
                    }
                ],
                4: [
                    {
                        role: "cleaning",
                        startHour: 6,
                        startMinute: 0,
                        endHour: 18,
                        endMinute: 0
                    }
                ],
                5: [
                    {
                        role: "cleaning",
                        startHour: 6,
                        startMinute: 0,
                        endHour: 18,
                        endMinute: 0
                    }
                ],
                6: [
                    {
                        role: "cleaning",
                        startHour: 6,
                        startMinute: 0,
                        endHour: 18,
                        endMinute: 0
                    }
                ],
            }
        }
    ];

    getWeeklySchedules(weekNumber) {
        return this.weeklySchedules;
    }
}