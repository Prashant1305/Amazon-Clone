import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  Button,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import { NavLink, useNavigate } from "react-router-dom";
const Product = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const navigate = useNavigate();
  const handleClick = async (id) => {
    navigate(`product/${id}`, { replace: false });
  };

  return (
    <>
      <NavLink
        strict
        to={`product/${props.details._id}`}
        replace={false}
        key={props.details._id}
      >
        <div style={{ marginTop: 70 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              style={{
                display: "flex",
                width: 1000,
                height: 300,
              }}
            >
              <Box sx={{ width: 350, flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  image={props.details.url}
                  alt="Paella dish"
                />
                {/* <img src={props.details.url} alt="failed to load" /> */}
              </Box>
              <Box>
                <CardContent>
                  <Typography component="div" variant="h7">
                    <p className="products_name">
                      {props.details.name.substr(0, 24)}...
                    </p>
                    <p
                      className="products_offer"
                      style={{ color: "#  007185" }}
                    >
                      Upto&nbsp;{props.details.discount_percentage}%
                    </p>
                    <p className="products_explore">
                      {props.details.category.substr(0, 24)}...
                    </p>
                    <Button onClick={() => handleClick(props.details._id)}>
                      {console.log(props.details._id)}
                      More
                    </Button>
                  </Typography>
                </CardContent>

                <CardActions disableSpacing>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Box>
            </Card>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Product;
