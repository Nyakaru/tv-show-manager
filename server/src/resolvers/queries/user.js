//@ts-check
function users(parent,args,context) {
    return context.prisma.users()
}

export default {
    users,
}
