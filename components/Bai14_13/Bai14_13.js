import React, { useState } from "react";

const Bai14_13 = () => {
  // State hienThi1: điều khiển việc có hiển thị khối cảnh báo hay không
  const [hienThi1, setHienThi1] = useState(false);
  // State hienThi2: điều khiển việc có hiển thị chữ "Mode Active" hay không
  const [hienThi2, setHienThi2] = useState(false);

  // Khi bấm nút Active -> hiện khối cảnh báo
  const btnHienThiDiv = () => {
    setHienThi1(true);
  };

  // Khi bấm Confirm -> ẩn cảnh báo và hiện chữ "Mode Active"
  const btnHienThiText = () => {
    setHienThi1(false); // ẩn cảnh báo
    setHienThi2(true); // hiện chữ "Mode Active"
  };

  // Khi bấm Cancel -> quay lại ban đầu (chỉ hiện nút Active)
  const btnCancel = () => {
    setHienThi1(false); // ẩn cảnh báo
    setHienThi2(false); // ẩn chữ "Mode Active"
  };

  return (
    /**
     * Kết quả mong muốn:
     * - Ban đầu: chỉ hiển thị nút Active
     * - Khi click nút Active: hiện ra khối Div cảnh báo
     * - Trong khối có 2 nút Confirm và Cancel
     *   + Confirm -> hiển thị chữ "Mode Active"
     *   + Cancel  -> quay lại ban đầu (nút Active)
     */
    <div>
      {/* Trạng thái ban đầu: khi cả hai đều false thì hiển thị nút Active */}
      {!hienThi1 && !hienThi2 && (
        <button onClick={btnHienThiDiv}>Active</button>
      )}

      {/* Khi hienThi1 = true -> hiển thị khối cảnh báo */}
      {hienThi1 && (
        <div>
          <p>
            <strong>Warning!</strong>
          </p>
          <p>Are you sure you want to activate this mode?</p>
          {/* Nút Confirm -> hiển thị chữ "Mode Active" */}
          <button onClick={btnHienThiText}>Confirm</button>
          {/* Nút Cancel -> quay lại trạng thái ban đầu */}
          <button onClick={btnCancel}>Cancel</button>
        </div>
      )}

      {/* Khi hienThi2 = true -> hiển thị chữ Mode Active */}
      {hienThi2 && <h3>Mode Active</h3>}
    </div>
  );
};

export default Bai14_13;
