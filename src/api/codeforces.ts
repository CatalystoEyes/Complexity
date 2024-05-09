import axios from 'axios'

export async function getData(endpointUrl: string) {
  try {
    const response = await axios.get(endpointUrl)
    return response.data
  } catch (error: any) {
    throw new Error(error.message)
  }
}
