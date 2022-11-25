import { ref } from 'vue'
import { useEventStore } from '../store'
import type { SingleEvent } from '../interfaces'
import EventCardEditor from '../components/EventCard/EventCardEditor.vue'

const eventStore = useEventStore()

export function useEventEditor(event:SingleEvent) {
  const showEditor = ref(false)

  const changeEditorVisibilty = ():void => {
    showEditor.value = !showEditor.value
  }

  const submitUpdate = async (key:string, value:string) => {
    const updateResponse = await eventStore.updateEvent(event.id, { [key]: value })

    if(!updateResponse) return
    changeEditorVisibilty()
  }

  return { showEditor, changeEditorVisibilty, submitUpdate, EventCardEditor }
}
