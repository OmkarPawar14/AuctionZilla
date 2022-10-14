import { UserAuth } from "./context/AuthContext";
import React, { useState, useEffect } from "react";
import { db } from "./config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { storage } from "./config/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";


// Description Box Here

export const MainApp = () => {
  const [error, setError] = useState("");
  const { user, logOut } = UserAuth();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [hours, setHours] = useState("");

  const [itemImage, setItemImage] = useState("");

  const [progress, setProgress] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const uploadImage = () => {
      const name = v4() + itemImage.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, itemImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () =>
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL);
          })
      );
    };
    itemImage && uploadImage();
  }, [itemImage]);

  const imageListRef = ref(storage, "auctionImg/");

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    if (itemImage == null) return;

    let currentDate = new Date();
    let dueDate = currentDate.setHours(currentDate.getHours() + hours);

    try {
      const query = await addDoc(collection(db, `auctions`), {
        itemTitle: title,
        desc: desc,
        startPrice: startPrice,
        dueDate: dueDate,
        seller: user.displayName,
        sellerId: user.uid,
        imageUrl: imageUrl,
        timestamp: serverTimestamp(),
      });
      setTitle("");
      setDesc("");
      setStartPrice("");
      setHours("");
    } catch (error) {
      console.log("Shutup", error);
    }
  };

  if (user === null) {
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  } else {
    return (
      <div className="body">
        <form className="description-form" onSubmit={submitForm}>
          <div className="inner-dsc">
            <label>
              Item Title:
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </label>
            <label>
              Item Description:
              <input
                type="text"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="inner-dsc">
            <label>
              Start Price: ₹
              <input
                type="number"
                value={startPrice}
                onChange={(e) => {
                  setStartPrice(e.target.value);
                }}
              />
            </label>
            <label className="inner-dsc">
              Item Duration in Hours:
              <input
                type="number"
                value={hours}
                onChange={(e) => {
                  setHours(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="inner-dsc">
            <label>
              Seller:
              <input type="text" readOnly value={user.displayName} />
            </label>
            <label>
              Item Image:
              <input
                type="file"
                onChange={(event) => {
                  setItemImage(event.target.files[0]);
                }}
              />
            </label>
          </div>

          <div className="form-btn">
            <button
              type="submit"
              className="btn Submit"
              disabled={progress !== null && progress < 100}
            >
              Submit
            </button>
            <button className="btn Cancel">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
};
