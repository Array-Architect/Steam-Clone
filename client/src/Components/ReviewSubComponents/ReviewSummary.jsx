import ReviewSummaryLeftCol from "./ReviewSummarySubComponents/ReviewSummaryLeftCol"
import ReviewSummaryRightCol from "./ReviewSummarySubComponents/ReviewSummaryRightCol"
import ReviewSummaryFooter from "./ReviewSummarySubComponents/ReviewSummaryFooter"
const ReviewSummary = () => {
  return (
    <div id="Reviews_summary" className="user_reviews_container" style={{display: "block"}}>
      <div>
        <ReviewSummaryLeftCol/>
        <ReviewSummaryRightCol/>
        <ReviewSummaryFooter/>
        <div style={{clear: "both"}}></div>
      </div>
    </div>
  )
}

export default ReviewSummary