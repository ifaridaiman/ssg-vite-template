// Frontend types matching backend API contracts
// These mirror the backend types in server/src/common/types/api-response.ts

export interface ApiMeta {
  timestamp: string
  requestId?: string
}

export interface ApiSuccessResponse<T> {
  success: true
  data: T
  meta: ApiMeta
}

export interface ApiError {
  code: string
  message: string
  details?: unknown
}

export interface ApiErrorResponse {
  success: false
  error: ApiError
}

// Type guard to check if response is an error
export function isApiErrorResponse(
  response: ApiSuccessResponse<unknown> | ApiErrorResponse
): response is ApiErrorResponse {
  return response.success === false
}

