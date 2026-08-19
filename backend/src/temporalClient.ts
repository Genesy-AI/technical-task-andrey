import { Client, Connection } from '@temporalio/client'

export const TEMPORAL_ADDRESS = 'localhost:7233'
export const TEMPORAL_NAMESPACE = 'default'
export const TEMPORAL_TASK_QUEUE = 'myQueue'

let clientPromise: Promise<Client> | undefined

export function getTemporalClient(): Promise<Client> {
  if (!clientPromise) {
    clientPromise = Connection.connect({ address: TEMPORAL_ADDRESS })
      .then((connection) => new Client({ connection, namespace: TEMPORAL_NAMESPACE }))
      .catch((error) => {
        // Drop the rejected promise so the next request retries the connection.
        clientPromise = undefined
        throw error
      })
  }

  return clientPromise
}
