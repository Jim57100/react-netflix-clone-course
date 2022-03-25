type MovieInterface = {
  id: number,
  title: string,
  name?: string,
  original_name?: string,
  overview?: string,
  poster_path: string,
  backdrop_path: string,
  release_date: string,
  isMovie: boolean,
}

type QuickViewInterface = {
  bannerStyle :BannerStyle,
  movie :Movie,
  handleClose :Function,
  popupStatus :boolean
}

type BannerStyle = {
  backgroundSize :string,
  backgroundImage :string,
  backgroundPosition :string,
}


type MovieDetailInterface = {
  author: string,

}

type handleClose = (togglePopup :Function) => void;

type MoviePlayerInterface = {
  movie :Movie,
  selectMovie :Function,
}

