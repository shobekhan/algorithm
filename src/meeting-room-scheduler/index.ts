type Meeting = {
    start: number
    end: number
}

function allocateRooms(meetings: Meeting[]): Map<Meeting, number> {
    const rooms = [1, 2]
    const roomEndTimes = new Map<number, number>()
    const allocation = new Map<Meeting, number>()

    meetings.sort((a, b) => a.start - b.start)

    for (const meeting of meetings) {
        let allocatedRoom: number | undefined

        for (const room of rooms) {
            const roomEndTime = roomEndTimes.get(room)

            if (roomEndTime === undefined || roomEndTime <= meeting.start) {
                allocatedRoom = room
                break
            }
        }

        if (allocatedRoom === undefined) {
            throw new Error('No room available')
        }

        allocation.set(meeting, allocatedRoom)
        roomEndTimes.set(allocatedRoom, meeting.end)
    }

    return allocation
}

const meetings: Meeting[] = [
    { start: 13.25, end: 14.5 },
    { start: 9, end: 10 },
    { start: 9.5, end: 11 },
    { start: 10, end: 12 },
    { start: 11, end: 13 },
    { start: 13, end: 13.5 }
]

const result = allocateRooms(meetings)

for (const [meeting, room] of result) {
    console.log(
        `${meeting.start}-${meeting.end} => Room ${room}`
    )
}