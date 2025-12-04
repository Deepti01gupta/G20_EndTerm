import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function VideoCall() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const localVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing media devices:", err);
        alert("Could not access camera/microphone. Please allow permissions.");
      }
    };

    startVideo();

    return () => {
      // Cleanup: stop tracks
      if (localVideoRef.current && localVideoRef.current.srcObject) {
        localVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const toggleMute = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      localVideoRef.current.srcObject.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      localVideoRef.current.srcObject.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsVideoOff(!isVideoOff);
    }
  };

  const endCall = () => {
    // Stop tracks before navigating
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      localVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    navigate(-1); // Go back
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-white">
      <div className="position-absolute top-0 start-0 p-3">
        <h4>Session: {sessionId}</h4>
      </div>

      <div className="row w-100 h-75 px-4">
        {/* Remote Video (Placeholder) */}
        <div className="col-md-8 d-flex align-items-center justify-content-center bg-secondary rounded mb-3 mb-md-0 position-relative">
          <div className="text-center">
            <i className="bi bi-person-circle display-1"></i>
            <p className="mt-3">Waiting for other participant...</p>
            <small className="text-light">(This is a simulated video call)</small>
          </div>
        </div>

        {/* Local Video */}
        <div className="col-md-4 d-flex flex-column">
          <div className="bg-black rounded h-50 mb-3 overflow-hidden position-relative border border-secondary">
            <video 
              ref={localVideoRef} 
              autoPlay 
              muted 
              playsInline 
              className="w-100 h-100 object-fit-cover"
              style={{ transform: "scaleX(-1)" }} // Mirror effect
            />
            <div className="position-absolute bottom-0 start-0 p-2 bg-dark bg-opacity-50 w-100">
              <small>You</small>
            </div>
          </div>
          
          {/* Chat or Notes Placeholder */}
          <div className="bg-light text-dark rounded h-50 p-3 overflow-auto">
            <h5>Interview Notes</h5>
            <textarea className="form-control h-75" placeholder="Type notes here..."></textarea>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="d-flex gap-3 mt-4">
        <button 
          className={`btn btn-lg rounded-circle ${isMuted ? 'btn-danger' : 'btn-secondary'}`}
          onClick={toggleMute}
          title={isMuted ? "Unmute" : "Mute"}
        >
          <i className={`bi bi-mic${isMuted ? '-mute' : ''}`}></i>
        </button>
        
        <button 
          className={`btn btn-lg rounded-circle ${isVideoOff ? 'btn-danger' : 'btn-secondary'}`}
          onClick={toggleVideo}
          title={isVideoOff ? "Turn Video On" : "Turn Video Off"}
        >
          <i className={`bi bi-camera-video${isVideoOff ? '-off' : ''}`}></i>
        </button>

        <button 
          className="btn btn-lg btn-danger rounded-pill px-4"
          onClick={endCall}
        >
          <i className="bi bi-telephone-x me-2"></i> End Call
        </button>
      </div>
    </div>
  );
}

export default VideoCall;
