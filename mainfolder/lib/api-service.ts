// Service to handle API calls to the Cloud Run service

export async function callCloudRunAPI(message: string): Promise<string> {
  try {
    // Replace this URL with your actual Cloud Run service URL when deployed
    const apiUrl = process.env.CLOUD_RUN_API_URL || "https://your-cloud-run-service.run.app"

    const response = await fetch(`${apiUrl}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`)
    }

    const data = await response.json()
    return data.response
  } catch (error) {
    console.error("Error calling Cloud Run API:", error)
    throw error
  }
}
