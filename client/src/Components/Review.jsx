import Histogram from "./ReviewSubComponents/Histogram"
import ReviewFilter from "./ReviewSubComponents/ReviewFilter"
import InfoContainer from "./ReviewSubComponents/InfoContainer"
const Review = () => {

  return (
        <div
          className="review_ctn"
        >
          <div
            className="page_content"
          >
            <div
              id="app_reviews_hash"
              className="app_reviews_area"
            >
              <h2
                className="user_reviews_header no_bottom_margin"
              >
                Customer reviews
              </h2>
              <div
                id="review_recent_events_container"
                className="review_recent_events"
              ></div>
              <Histogram/>
              <ReviewFilter/>
              <InfoContainer/>
              <div
                id="review_selected_filters"
              ></div>
            </div>
          </div>
        </div>
  )
}

export default Review