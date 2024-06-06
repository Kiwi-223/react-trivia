import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  onClose: () => void;
}

{
  /* <div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    An example success alert with an icon
  </div>
</div> */
}

const answerAlert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary lert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default answerAlert;
