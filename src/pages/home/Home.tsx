import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";


interface Photo {
  url: string;
  user: number;
  title: string;
  id: number;
  description: string;
}

const Home = () => {
  const [selectedImageArr, setSelectedImageArr] = useState<number[]>([]);
  const [isloading, setisloading] = useState(false);
  const [imageId, setimageId] = useState(0);
  const [photosData, setPhotosData] = useState<Photo[] | null>(null);
  const [error, seterror] = useState("");
  const [imageName, setimageName] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [name, setname] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () =>{ 
    setname("")
    setShowModal(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setSelectedImageArr([]);
    setisloading(true);
    const url =
      "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100";

    try {
      const response = await axios.get(url);
      const shuffled = response.data.photos.sort(() => 0.5 - Math.random());
      setPhotosData(shuffled.slice(0, 4));

      setisloading(false);
    } catch (error: any) {
      seterror(error.message);
      setisloading(false);
    }
  }

  const handleDownload = async () => {
    console.log("handleDownload", imageUrl)
    try {
      const response = await fetch(imageUrl); 
      const buffer = await response.arrayBuffer();
      const url = window.URL.createObjectURL(new Blob([buffer]));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'image.png';
      link.click();
      window.URL.revokeObjectURL(url); 
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div className="home">
      <div className="main-container">
        <div className="image-header">
          <p>Click to generate random images</p>
          <button className="btn" onClick={fetchData}>
            Refresh
          </button>
        </div>
        <div>
          {photosData == null ? (
            <div className="null-div">
              {isloading ? <div className="spinner"></div> : <div>{error}</div>}
            </div>
          ) : (
            <div className="image-container">
              {photosData?.map(({ id, url, title }) => (
                <div
                  key={id}
                  className="grid-item"
                  onClick={() => {
                    const newSelectedImageArr = [...selectedImageArr];
                    newSelectedImageArr.shift();
                    newSelectedImageArr.push(id);
                    setSelectedImageArr(newSelectedImageArr);
                    setimageId(newSelectedImageArr[0]); // correct this line
                    setimageName(title);
                    setImageUrl(url);
                  }}
                >
                  {photosData === null ? (
                    <div className="null-div">null</div>
                  ) : (
                    <div>
                      <img className="img" src={url} alt="bag image" />
                      <input
                        checked={id === imageId}
                        className="checkbox"
                        type="checkbox"
                        value={name}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

   
        <div className="form-style">
          {selectedImageArr.length === 0 ? (
            <p className="info">Please select an image to continue</p>
          ) : (
            <p className="info-success">Image selected success</p>
          )}
          <div className="input-container-style">
            <label className="label-style">Fullname</label>
            <input
              onChange={(e) => {
                setname(e.target.value);
              }}
              className="input"
              type="text"
            />
          </div>
          {name == "" && (
            <p className="info">
              {selectedImageArr.length > 0 ? "Please enter your name" : null}
            </p>
          )}

          <button
            disabled={selectedImageArr.length === 0 || name == ""}
            onClick={() => {
              
              handleShowModal();
           
              // handleDownload()
            }}
            className="btn"
          >
            Submit
          </button>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
         
          <div className="modal">
          
            <h2>Success!</h2>
            <p>Your action was successful.</p>
            <div className="img-container" style={{
              width: '100%',
              maxWidth: '400px',
              backgroundImage: `url(${imageUrl})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
            }}>
            <span>Thank you</span>
              
              <span>{name}</span>
            </div>
            <button onClick={handleCloseModal}>Dismiss</button>
          

          </div>
        </div>
      )}
    </div>
    // </div>
  );
};

export default Home;
