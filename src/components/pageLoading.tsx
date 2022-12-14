import { IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react'
import React from 'react'

const PageLoading = () => {
  return (
    <div>
      <IonInfiniteScroll>
        <IonInfiniteScrollContent loadingText="Please wait..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </div>
  )
}

export default PageLoading