import type { Image } from "../types";



const imagelist = [
    {
        url: "https://images.unsplash.com/photo-1625283518288-00362afc8663?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685",
        participants: 4,
    },
    {
        url: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        participants: 6,
    }, 
    {
        url: "https://plus.unsplash.com/premium_photo-1705883267788-4040699634c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1137",
        participants: 6,
    },
    {
        url: "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1334",
        participants: 5
    },
    {
        url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        participants: 4
    },
    {
        url: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        participants: 4
    },
    {
        url: "https://images.unsplash.com/photo-1642775073532-65020022b8d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        participants: 14,
    },
    {
        url: "https://images.unsplash.com/photo-1679579664638-6b97f1be7d85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1247",
        participants: 11,
    },
    {
        url: "https://images.unsplash.com/photo-1631821657340-b07983bfc5f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxncm91cCUyMG9mJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        participants: 3,
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1681486898750-7083b3acd914?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1141",
        participants: 6,
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1706026427244-3b3df84382d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxncm91cCUyMG9mJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        participants: 6,
    },
    {
        url: "https://images.unsplash.com/photo-1744980713730-78730641c245?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2133",
        participants: 2,
    },
    {
        url: "https://images.unsplash.com/photo-1745434123180-1875064e45cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2lsbHklMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        participants: 2,
    },
    {
        url: "https://images.unsplash.com/photo-1745434123176-2882c9c329af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lsbHklMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        participants: 2,
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1682002634529-ccac602a494e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2lsbHklMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        participants: 3,
    },
    {
        url: "https://images.unsplash.com/photo-1745434123172-d3016a7ba075?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        participants: 2,
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1733889633086-6ee1c2d19264?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpbGx5JTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        participants: 2,
    },
    {
        url: "https://images.unsplash.com/photo-1758520144542-3b2d1d683ed0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        participants: 4,
    },
    {
        url: "https://plus.unsplash.com/premium_photo-1661611044272-b43f9a005984?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        participants: 1,
    }
]

export const startingImages: Image[] = imagelist.map(i => ({ ...i, selected: true}));