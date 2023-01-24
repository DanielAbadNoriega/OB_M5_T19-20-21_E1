import React, { useState, useEffect } from "react";
import { getRandomJoke } from "../../services/axiosService";

/* Styles */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import Badge from "@mui/material/Badge";

const JokeChuck = () => {
  const [joke, setJoke] = useState(null);
  const [likes, setLikes] = useState(0);
  const [disLike, setDisLike] = useState(0);

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    getRandomJoke()
      .then((res) => {
        console.log("Response : ", res.data);
        setJoke(res.data);
      })
      .catch((error) => {
        console.log("[ jokeChuck - getJoke ] Error request: ", error);
      });
  };

  const addLike = () => {
    setLikes(likes + 1);
  };

  const addDislike = () => {
    setDisLike(disLike + 1);
  };

  return (
    <div>
      <h1>Chuck Norris says: </h1>
      {joke != null ? (
        <Stack spacing={1} justifyContent="center" alignItems="center">
          <Card sx={{ width: "50vw", marginBottom: "10vh" }}>
            {/* IMG */}
            <CardMedia
              sx={{ margin: "auto auto" }}
              src={require("../../assets/imgs/chuckIcon.png")}
              title="green iguana"
              component="img"
            />

            {/* JOKE */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <i>"{joke.value}"</i>
              </Typography>
            </CardContent>

            {/* BUTTONS */}
            {likes != null ? (
              <Badge badgeContent={likes} color="primary">
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => addLike()}
                >
                  <ThumbUpIcon />
                </Button>
              </Badge>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={() => addLike()}
              >
                <ThumbUpIcon />
              </Button>
            )}

            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() => getJoke()}
              style={{ margin: "5px" }}
            >
              {" "}
              New Chuck Joke
            </Button>

            {disLike != null ? (
              <Badge badgeContent={disLike} color="primary">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => addDislike()}
                >
                  <ThumbDownAltIcon />
                </Button>
              </Badge>
            ) : (
              <Button variant="contained" color="error">
                <ThumbDownAltIcon />
              </Button>
            )}
          </Card>
        </Stack>
      ) : (
        <Stack spacing={1} justifyContent="center" alignItems="center">
          <h2> Loading Chuck's jokes</h2>
          <CircularProgress />
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={60}
            animation="wave"
          />
        </Stack>
      )}
    </div>
  );
};

export default JokeChuck;
