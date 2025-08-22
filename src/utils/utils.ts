const navigateTo = (url: string) => {
    return
}

export const textEllipsis = (text: string, limit: number) => {
    if(!text) return "";
    return text.slice(0, limit) + "..."
}