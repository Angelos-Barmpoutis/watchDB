import { motion } from "framer-motion";

const Movie = props => {

    const title = props.movieTitle ? props.movieTitle : props.tvTitle;
    const releaseDate = props.movieReleaseDate ? props.movieReleaseDate : props.tvReleaseDate;

    const i = props.index;

    // Movie Variants
    const movieVariants = {
        hidden: {
            opacity: 0,
            x: -400
        },
        visible: i => ({
            opacity: 1,
            x:0,
            transition: {
                delay: i * 0.3,
                duration: 0.3,
                type: 'spring',
                stiffness: 100,
                mass: 1,
                damping: 15
            }
        })
    }

    // Image Variants
    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: i => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: (i * 0.3) + 0.3,
                duration: 0.3,
                type: 'spring',
                stiffness: 100,
                mass: 1,
                damping: 15
            }
        })
    }

    // Return rating's color based on the rating
    const ratingColor = (rating) => {
        if (rating >= 7) {
            return 'green'
        } else if (rating >= 6) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    return (
        <motion.div
        className="movie"
        onClick = {() => props.openModal(props.category, props.id, title)}
        variants= {movieVariants}
        initial = 'hidden'
        animate = 'visible'
        custom = {i}
        >
            <motion.img
            loading=""  
            src={`https://image.tmdb.org/t/p/w200${props.image}`}
            alt={title}
            className="movie__image"
            variants= {imageVariants}
            initial = 'hidden'
            animate = 'visible'
            custom = {i}
            />
            <div className="movie__details">
                <h2 className="movie__details__title"><span>Title:</span>{title}</h2>
                <h3 className="movie__details__release"><span>Release Date:</span>{releaseDate}</h3>
                <h3 className="movie__details__genre"><span>Genre:</span>{props.getGenre(props.genre)}</h3>
                
                <h4 className={`movie__details__rating ${ratingColor(props.rating)}`}>{props.rating !== 0 && props.rating !== 10 ? props.rating.toFixed(1) : props.rating}</h4>
                <p className="movie__details__overview">{props.overview}</p>
            </div>
        </motion.div>
    )
}

export default Movie;