export default function Text({ text }: { text: String }) {
  return (
    <div className="bg-white p-5 max-w-[550px] min-w-[20rem] text-center relative rounded-full">
      <span
        aria-hidden="true"
        style={{
          borderRadius: "100% 100% 0 0",
        }}
        className="absolute h-20 w-28 block -top-6 left-3 bg-white"
      />
      <span
        aria-hidden="true"
        className="absolute h-20 w-20 rounded-full block -top-2 right-4 bg-white"
      />
      <span
        aria-hidden="true"
        style={{
          borderRadius: "0 0 100% 100%",
        }}
        className="absolute h-20 w-28 block -bottom-6 right-3 bg-white"
      />
      <span
        aria-hidden="true"
        style={{
          borderRadius: "0 0 100% 100%",
          left: "40%",
          width: "40%",
        }}
        className="absolute h-20 block -bottom-6 bg-white"
      />
      <span
        aria-hidden="true"
        style={{
          borderRadius: "100% 100% 0 0",
          left: "20%",
        }}
        className="absolute w-1/2 h-28 block -top-20 bg-white"
      />
      <span
        aria-hidden="true"
        style={{ borderRadius: "100% 100% 0 0", right: "20%", height: "100%" }}
        className="absolute w-1/3 block -top-10 bg-white"
      ></span>
      <span
        aria-hidden="true"
        style={{
          borderRadius: "0 0 100% 100%",
          left: "10%",
          height: "150%",
        }}
        className="absolute w-1/2 block top-0 bg-white"
      />

      <span className="relative z-10 text-2xl">{text}</span>
    </div>
  );
}
