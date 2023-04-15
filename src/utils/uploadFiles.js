import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import axiosInstance from "../api/axios";

const storage = getStorage(app);

export const uploadFile = (campaignId, id, file) => {
  const storageRef = ref(storage, `user/${id}/${campaignId}/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      console.log(snapshot.state);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        const res = await axiosInstance.post("/user/pdf", {
          pdf: downloadURL,
          userId: id,
        });
        console.log(res.data);
        console.log("campaign added");
      });
    }
  );
};
