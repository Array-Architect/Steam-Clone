const Relevant = () => {
  return (
    <>
      <div className="block responsive_apppage_details_right heading responsive_hidden">
        Is this game relevant to you?
      </div>
      <div className="block responsive_apppage_details_right recommendation_noinfo responsive_hidden">
        <p>
          Sign in to see reasons why you may or may not like this based on your
          games, friends, and curators you follow.
        </p>
        <a
          className="btnv6_blue_hoverfade btn_medium"
          href="https://store.steampowered.com/login/?redir=app/892970"
          style={{ marginRight: "5px" }}
        >
          <span>Sign In</span>
        </a>
        or
        <a
          className="btnv6_blue_hoverfade btn_medium"
          href="steam://store/892970"
          style={{ marginLeft: "5px" }}
        >
          <span>Open in Steam</span>
        </a>
      </div>
    </>
  );
};

export default Relevant;
