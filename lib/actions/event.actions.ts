'use server'
import { CreateEventParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import Account from "../database/models/user.model"
import Event from "../database/models/event.model"
import User from "../database/models/user.model"
import Category from "../database/models/category.model"
import { GetAllEventsParams } from "@/types"


const populateEvent = async(query: any) => {
    return query  
        .populate({path: 'organizer', model: User, select: '_id firstName lastName'})
        .populate({path: 'category', model: Category, select: '_id name'})

}

export async function createEvent({ userId, event, path }: CreateEventParams) {
    try {
      await connectToDatabase()
  
      const organizer = await User.findById(userId)
      if (!organizer) throw new Error('Organizer not found')
  
      const newEvent = await Event.create({ ...event, category: event.categoryId, organizer: userId })
  
      return JSON.parse(JSON.stringify(newEvent))
    } catch (error) {
      handleError(error)
    }
}

export async function getEventById(eventId: string) {
    try {
      await connectToDatabase()
  
      const event = await populateEvent(Event.findById(eventId))
  
      if (!event) throw new Error('Event not found')
  
      return JSON.parse(JSON.stringify(event))
    } catch (error) {
      handleError(error)
    }
  }

  export async function getAllEvents({query, limit=6, page, category}: GetAllEventsParams) {
    try {
      await connectToDatabase()

      const conditions = {}
  
      const eventsQuery = Event.find(conditions)
        .sort({createdAt: 'desc'})
        .skip(0)
        .limit(limit)

      const events = await populateEvent(eventsQuery)
      const eventsCount = await Event.countDocuments(conditions)

      if (!event) throw new Error('Event not found')
  
      return {
        data: JSON.parse(JSON.stringify(events)),
        totalPages: Math.ceil(eventsCount / limit)
      }
    } catch (error) {
      handleError(error)
    }
  }

