const Curator = () => {
  return (
    <div className="steam_curators_block block responsive_apppage_reviewblock">
      <div className="block_header">
        <div className="right">
          <a href="https://store.steampowered.com/curators/curatorsreviewing/?appid=892970&snr=1_5_9__top-curators">
            View all
          </a>
        </div>
        <h2 className="underline">What Curators Say</h2>
        <div className="no_curators_followed">
          863 Curators have reviewed this product. Click{" "}
          <a href="https://store.steampowered.com/curators/curatorsreviewing/?appid=892970&snr=1_5_9__top-curators">
            here
          </a>{" "}
          to see them.
        </div>
      </div>
    </div>
  );
};

export default Curator;
