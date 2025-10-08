import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách bảo mật | LIKELION",
  description: "Chính sách bảo mật của LIKELION",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Chính sách bảo mật
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Content */}
          <article className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 space-y-8 sm:space-y-10">
            {/* Section 1 */}
            <section className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  1
                </span>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 !mt-1">
                    Giới thiệu
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    LIKELION là trung tâm đào tạo lập trình chất lượng tại Việt
                    Nam. Chúng tôi không gò bó bản thân trong phương pháp giáo
                    dục truyền thống. Bạn sẽ được học từ những chuyên gia trong
                    ngành, tiếp cận mô hình học hiện đại và chương trình đào tạo
                    chuyên sâu đáp ứng nhu cầu thực tế của thị trường công nghệ.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  2
                </span>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 !mt-1">
                    Thông tin chúng tôi thu thập
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    Chúng tôi có thể thu thập các loại thông tin sau từ khách
                    hàng:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        <strong className="font-semibold">
                          Thông tin cá nhân:
                        </strong>{" "}
                        Họ tên, địa chỉ email, số điện thoại, ngày sinh, địa
                        chỉ.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        <strong className="font-semibold">
                          Thông tin thanh toán:
                        </strong>{" "}
                        Khi khách hàng đăng ký khóa học hoặc dịch vụ có phí.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        <strong className="font-semibold">
                          Thông tin thiết bị:
                        </strong>{" "}
                        Địa chỉ IP, loại trình duyệt, hệ điều hành và dữ liệu
                        cookie.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        <strong className="font-semibold">
                          Thông tin sử dụng dịch vụ:
                        </strong>{" "}
                        Lịch sử truy cập, thời gian sử dụng dịch vụ và các hành
                        động thực hiện trên nền tảng của chúng tôi.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  3
                </span>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 !mt-1">
                    Cách chúng tôi sử dụng thông tin
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    Thông tin của bạn được sử dụng nhằm các mục đích sau:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        Cung cấp và cải thiện chất lượng dịch vụ.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        Hỗ trợ khách hàng, giải đáp thắc mắc và xử lý yêu cầu.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        Gửi thông tin về các chương trình học, ưu đãi và cập
                        nhật mới nhất.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        Nâng cao trải nghiệm người dùng thông qua phân tích và
                        cá nhân hóa nội dung.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        Tuân thủ các yêu cầu pháp lý và bảo vệ quyền lợi của
                        LIKELION.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  4
                </span>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 !mt-1">
                    Chia sẻ thông tin với bên thứ ba
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    Chúng tôi không bán hoặc cho thuê thông tin cá nhân của bạn.
                    Tuy nhiên, LIKELION có thể chia sẻ thông tin với các bên thứ
                    ba trong các trường hợp sau:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        <strong className="font-semibold">
                          Đối tác và nhà cung cấp dịch vụ:
                        </strong>{" "}
                        Hỗ trợ cung cấp dịch vụ (ví dụ: nền tảng thanh toán,
                        công cụ phân tích, nhà cung cấp dịch vụ email).
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        <strong className="font-semibold">
                          Yêu cầu pháp lý:
                        </strong>{" "}
                        Khi có yêu cầu từ cơ quan có thẩm quyền theo quy định
                        pháp luật.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        <strong className="font-semibold">
                          Bảo vệ quyền lợi:
                        </strong>{" "}
                        Khi cần thiết để bảo vệ quyền lợi hợp pháp của LIKELION,
                        khách hàng và cộng đồng.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  5
                </span>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 !mt-1">
                    Lưu trữ và bảo mật thông tin
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Chúng tôi áp dụng các biện pháp bảo mật phù hợp để bảo vệ
                    thông tin cá nhân khỏi truy cập trái phép, mất mát hoặc rò
                    rỉ. LIKELION lưu trữ dữ liệu trong thời gian cần thiết để
                    đáp ứng các mục đích đã đề ra hoặc theo quy định của pháp
                    luật.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  6
                </span>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 !mt-1">
                    Quyền lợi của khách hàng
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    Khách hàng có quyền:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        Truy cập, chỉnh sửa hoặc yêu cầu xóa thông tin cá nhân
                        của mình.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        Từ chối nhận thông tin tiếp thị từ LIKELION.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span className="text-base sm:text-lg leading-relaxed">
                        Đề nghị giải thích về cách LIKELION sử dụng dữ liệu cá
                        nhân.
                      </span>
                    </li>
                  </ul>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
                    Nếu bạn muốn thực hiện các quyền này, vui lòng liên hệ với
                    chúng tôi theo thông tin bên dưới.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 - Contact */}
            <section className="space-y-4 bg-blue-50 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  7
                </span>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 !mt-1">
                    Liên hệ
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    Nếu có bất kỳ câu hỏi nào về chính sách bảo mật, bạn có thể
                    liên hệ với chúng tôi qua:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-semibold text-base sm:text-lg">
                        Email:
                      </span>
                      <a
                        href="mailto:likelion.vn@likelion.net"
                        className="text-blue-600 hover:text-blue-800 underline text-base sm:text-lg break-all"
                      >
                        likelion.vn@likelion.net
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-semibold text-base sm:text-lg flex-shrink-0">
                        Địa chỉ:
                      </span>
                      <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Phòng 1101, Tầng 11, Tòa nhà Cobi Tower II, 2-4 Đường số
                        8, Phường Tân Mỹ, TPHCM
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-semibold text-base sm:text-lg">
                        Website:
                      </span>
                      <a
                        href="https://www.likelion.edu.vn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline text-base sm:text-lg break-all"
                      >
                        www.likelion.edu.vn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Chính sách này có thể được cập nhật theo thời gian. Vui lòng
                kiểm tra lại định kỳ để đảm bảo bạn hiểu rõ quyền lợi và trách
                nhiệm của mình.
              </p>
              {/* <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
                Cập nhật lần cuối:{" "}
                {new Date().toLocaleDateString("vi-VN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p> */}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
