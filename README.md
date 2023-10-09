This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

                            <Transition appear show={isOpen} as={Fragment}>
                              <Dialog
                                as="div"
                                className={
                                  "fixed bg-slate-200  inset-0 z-100 overflow-y-auto rangewrapmax-parent " +
                                  (isOpen ? "" : "d-none-rangewrapmax")
                                }
                                onClose={closeModal}
                              >
                                <div className="min-h-screen  text-center">
                                  <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Dialog.Overlay className="fixed inset-0" />
                                  </Transition.Child>

                                  {/* This element is to trick the browser into centering the modal contents. */}
                                  <span
                                    className="inline-block h-screen align-middle leftmidd-dt"
                                    aria-hidden="true"
                                  >
                                    &#8203;
                                  </span>

                                  <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                  >
                                    <div className="inline-block w-full datepic-rangewrapmax-wxl my-3 overflow-hidden text-left align-middle transition-all transform bg-white  rounded-2xl">
                                      <Dialog.Title
                                        as="h3"
                                        className="text-sm  font-medium leading-6 text-gray-900 justify-content-between d-flex flex-column justify-content-center align-items-center flex-wrap"
                                      >
                                        <DateRangePicker
                                          onChange={(item) =>
                                            setState([item.selection])
                                          }
                                          showSelectionPreview={true}
                                          moveRangeOnFirstSelection={false}
                                          minDate={moment().toDate()}
                                          // maxDate={year}
                                          months={2}
                                          ranges={state}
                                          className="datepic-rangewrap justify-content-between"
                                          rangeColors={[
                                            "#6c757d",
                                            "#6c757d",
                                            "#6c757d",
                                          ]}
                                          direction="horizontal"
                                        />
                                      </Dialog.Title>

                                      <div className="text-right border-top pt-3 donerange-btn-wrp">
                                        <button
                                          className="btn btn-dark btn-lg donerange-btn"
                                          onClick={() => {
                                            setdate();
                                          }}
                                        >
                                          Done
                                        </button>
                                      </div>
                                    </div>
                                  </Transition.Child>
                                </div>
                              </Dialog>
                            </Transition>
