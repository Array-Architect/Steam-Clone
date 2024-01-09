import Histogram from "./ReviewSubComponents/Histogram"
import ReviewFilter from "./ReviewSubComponents/ReviewFilter"
import InfoContainer from "./ReviewSubComponents/InfoContainer"
import ReviewSummary from "./ReviewSubComponents/ReviewSummary"
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
              <input
                type="hidden"
                id="review_appid"
                value="892970">
              </input>
              <input
                type="hidden"
                id="review_default_day_range"
                value="30">
              </input>
              <input
                type="hidden"
                id="review_start_date"
                value="-1">
              </input>
              <input
                type="hidden"
                id="review_end_date"
                value="-1">
              </input>
              <input
                type="hidden"
                id="review_summary_num_positive_reviews"
                value="352889">
              </input>
              <input
                type="hidden"
                id="review_summary_num_reviews"
                value="371250">
              </input>
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
              <ReviewSummary/>
            </div>
          </div>
        </div>
  )
}

export default Review