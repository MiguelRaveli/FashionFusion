import { change_image } from "../../../redux/imageSlice";
import { selectedProductA } from "../../../redux/selectedProductSlice";
import classes from "./Mini_Imagens.module.css";
import { useDispatch, useSelector } from "react-redux";
const Mini_Imagens = () => {
  const { selectedProductAtual } = useSelector(selectedProductA);
  const dispatch = useDispatch();
  const HandleChageImage = (img) => {
    dispatch(change_image(img));
  };
  return (
    <>
      <div className={classes.Outras_imagens}>
        {selectedProductAtual.imageUrl1 && (
          <div
            onClick={() => HandleChageImage(selectedProductAtual.imageUrl1)}
            style={{
              backgroundImage: `url(${selectedProductAtual.imageUrl1})`,
            }}
            className={classes.mini_imgs}
          ></div>
        )}
        {selectedProductAtual.imageUrl2 && (
          <div
            onClick={() => HandleChageImage(selectedProductAtual.imageUrl2)}
            style={{
              backgroundImage: `url(${selectedProductAtual.imageUrl2})`,
            }}
            className={classes.mini_imgs}
          ></div>
        )}

        {selectedProductAtual.imageUrl3 && (
          <div
            onClick={() => HandleChageImage(selectedProductAtual.imageUrl3)}
            style={{
              backgroundImage: `url(${selectedProductAtual.imageUrl3})`,
            }}
            className={classes.mini_imgs}
          ></div>
        )}
        {selectedProductAtual.imageUrl4 && (
          <div
            onClick={() => HandleChageImage(selectedProductAtual.imageUrl4)}
            style={{
              backgroundImage: `url(${selectedProductAtual.imageUrl4})`,
            }}
            className={classes.mini_imgs}
          ></div>
        )}
      </div>
    </>
  );
};

export default Mini_Imagens;
