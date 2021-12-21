import type { TGetEventsReturn } from '../../types/event.type'

export type TContextValue = {
  events: TGetEventsReturn
  areEventsLoading: boolean
}
