export const coursesData = [
    {
        id: 1,
        title: 'HTML & CSS',
        description: 'HTML & CSS Basic to Exper Label',
        category: 'Design',
        isFree: true,
        prerequisites: [],
        duration: 1
    },
    {
        id: 2,
        title: 'JavaScript Basics',
        description: 'All javascripts basic in one place',
        category: 'Programing',
        isFree: false,
        prerequisites: [1],
        duration: 2
    },
    {
        id: 3,
        title: 'NodeJs',
        description: 'NodeJs Basic to Exper Label',
        category: 'Programing',
        isFree: false,
        prerequisites: [1, 2],
        duration: 3
    },
    {
        id: 4,
        title: 'ReactJs & NextJS',
        description: 'ReactJs & NextJS Basic to Exper Label',
        category: 'Frontend',
        isFree: false,
        prerequisites: [1, 2, 3],
        duration: 3
    },
    {
        id: 5,
        title: 'Devops Basic',
        description: 'Devops techniques Basic to Exper Label',
        category: 'Devops',
        isFree: false,
        prerequisites: [2, 3],
        duration: 3
    }
]

export const userData = [
    {
        userId: 1,
        name: "Shakur Chowdhury",
        email: "chowdhuryshakur@gmail.com",
        preferences: {
            preferredCategories: ["Programming","Design"],
            notifications: true
        }
    }
]