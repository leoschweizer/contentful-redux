module.exports = {
	space: {
		sys: {
			type: 'Space',
			id: '2fcnblq1yq14'
		},
		name: 'Example',
		locales: [
			{
				code: 'en-US',
				default: true,
				name: 'English (United States)',
				fallbackCode: null
			}
		]
	},
	contentTypes: [
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '38nK0gXXIccQ2IEosyAg6C',
				type: 'ContentType',
				createdAt: '2018-02-18T14:04:13.629Z',
				updatedAt: '2018-02-18T14:04:13.629Z',
				revision: 1
			},
			displayField: 'name',
			name: 'Author',
			description: null,
			fields: [
				{
					id: 'name',
					name: 'Name',
					type: 'Symbol',
					localized: false,
					required: false,
					disabled: false,
					omitted: false
				},
				{
					id: 'twitterHandle',
					name: 'Twitter handle',
					type: 'Symbol',
					localized: false,
					required: false,
					disabled: false,
					omitted: false
				},
				{
					id: 'profilePhoto',
					name: 'Profile photo',
					type: 'Link',
					localized: false,
					required: false,
					disabled: false,
					omitted: false,
					linkType: 'Asset'
				},
				{
					id: 'biography',
					name: 'Biography',
					type: 'Text',
					localized: false,
					required: false,
					disabled: false,
					omitted: false
				},
				{
					id: 'createdEntries',
					name: 'Created entries',
					type: 'Array',
					localized: false,
					required: false,
					disabled: false,
					omitted: false,
					items: {
						type: 'Link',
						validations: [
							{
								linkContentType: [
									'1xYw5JsIecuGE68mmGMg20'
								]
							}
						],
						linkType: 'Entry'
					}
				}
			]
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '1xYw5JsIecuGE68mmGMg20',
				type: 'ContentType',
				createdAt: '2018-02-18T14:04:13.481Z',
				updatedAt: '2018-02-18T14:04:13.481Z',
				revision: 1
			},
			displayField: 'title',
			name: 'Image',
			description: null,
			fields: [
				{
					id: 'title',
					name: 'Title',
					type: 'Symbol',
					localized: false,
					required: true,
					disabled: false,
					omitted: false
				},
				{
					id: 'photo',
					name: 'Photo',
					type: 'Link',
					localized: false,
					required: false,
					disabled: false,
					omitted: false,
					linkType: 'Asset'
				},
				{
					id: 'imageCaption',
					name: 'Image caption',
					type: 'Text',
					localized: false,
					required: false,
					disabled: false,
					omitted: false
				},
				{
					id: 'imageCredits',
					name: 'Image credits',
					type: 'Text',
					localized: false,
					required: false,
					disabled: false,
					omitted: false
				}
			]
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '7leLzv8hW06amGmke86y8G',
				type: 'ContentType',
				createdAt: '2018-02-18T14:04:14.153Z',
				updatedAt: '2018-02-18T14:04:14.153Z',
				revision: 1
			},
			displayField: 'title',
			name: 'Photo Gallery',
			description: null,
			fields: [
				{
					id: 'title',
					name: 'Title',
					type: 'Text',
					localized: false,
					required: true,
					disabled: false,
					omitted: false
				},
				{
					id: 'slug',
					name: 'Slug',
					type: 'Symbol',
					localized: false,
					required: false,
					disabled: false,
					omitted: false
				},
				{
					id: 'author',
					name: 'Author',
					type: 'Link',
					localized: false,
					required: true,
					disabled: false,
					omitted: false,
					linkType: 'Entry'
				},
				{
					id: 'coverImage',
					name: 'Cover Image',
					type: 'Link',
					localized: false,
					required: false,
					disabled: false,
					omitted: false,
					linkType: 'Asset'
				},
				{
					id: 'description',
					name: 'Description',
					type: 'Text',
					localized: false,
					required: false,
					disabled: false,
					omitted: false
				},
				{
					id: 'images',
					name: 'Images',
					type: 'Array',
					localized: false,
					required: false,
					disabled: false,
					omitted: false,
					items: {
						type: 'Link',
						validations: [
							{
								linkContentType: [
									'1xYw5JsIecuGE68mmGMg20'
								]
							}
						],
						linkType: 'Entry'
					}
				},
				{
					id: 'tags',
					name: 'Tags',
					type: 'Array',
					localized: false,
					required: false,
					disabled: false,
					omitted: false,
					items: {
						type: 'Symbol',
						validations: []
					}
				},
				{
					id: 'date',
					name: 'Date',
					type: 'Date',
					localized: false,
					required: false,
					disabled: false,
					omitted: false
				},
				{
					id: 'location',
					name: 'Location',
					type: 'Location',
					localized: false,
					required: false,
					disabled: true,
					omitted: false
				}
			]
		}
	],
	assets: [
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '2czUZ3VWIc68cyOoyGY4MW',
				type: 'Asset',
				createdAt: '2018-02-18T14:04:21.098Z',
				updatedAt: '2018-02-18T14:04:21.098Z',
				revision: 1
			},
			fields: {
				title: {
					'en-US': 'Golden Gate Bridge'
				},
				file: {
					'en-US': {
						url: '//images.contentful.com/2fcnblq1yq14/2czUZ3VWIc68cyOoyGY4MW/bf8e90962701acda5f785ee00663cefd/lUUnN7VGSoWZ3noefeH7_Baker_Beach-12.jpg',
						details: {
							size: 9508880,
							image: {
								width: 5580,
								height: 3720
							}
						},
						fileName: 'lUUnN7VGSoWZ3noefeH7_Baker Beach-12.jpg',
						contentType: 'image/jpeg'
					}
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '26PCF5jzziyeiessOOY0o0',
				type: 'Asset',
				createdAt: '2018-02-18T14:04:20.883Z',
				updatedAt: '2018-02-18T14:04:20.883Z',
				revision: 1
			},
			fields: {
				title: {
					'en-US': 'The Flower'
				},
				file: {
					'en-US': {
						url: '//images.contentful.com/2fcnblq1yq14/26PCF5jzziyeiessOOY0o0/bf8e90962701acda5f785ee00663cefd/2MwGKhLETRSQoHP9UWE4_IMG_1348-3.jpg',
						details: {
							size: 8797338,
							image: {
								width: 5184,
								height: 3456
							}
						},
						fileName: '2MwGKhLETRSQoHP9UWE4_IMG_1348-3.jpg',
						contentType: 'image/jpeg'
					}
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: 'geptFDHuzQa8oA2Ywmiew',
				type: 'Asset',
				createdAt: '2018-02-18T14:04:20.337Z',
				updatedAt: '2018-02-18T14:04:20.337Z',
				revision: 1
			},
			fields: {
				title: {
					'en-US': 'City Street'
				},
				file: {
					'en-US': {
						url: '//images.contentful.com/2fcnblq1yq14/geptFDHuzQa8oA2Ywmiew/bf8e90962701acda5f785ee00663cefd/3CoEETpvQYO8x60lnZSA_rue.jpg',
						details: {
							size: 8254379,
							image: {
								width: 4912,
								height: 3264
							}
						},
						fileName: '3CoEETpvQYO8x60lnZSA_rue.jpg',
						contentType: 'image/jpeg'
					}
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '3nCIlsuVKwQysuMcKGuUA4',
				type: 'Asset',
				createdAt: '2018-02-18T14:04:20.151Z',
				updatedAt: '2018-02-18T14:04:20.151Z',
				revision: 1
			},
			fields: {
				title: {
					'en-US': 'The world on a digital screen'
				},
				file: {
					'en-US': {
						url: '//images.contentful.com/2fcnblq1yq14/3nCIlsuVKwQysuMcKGuUA4/bf8e90962701acda5f785ee00663cefd/tU3ptNgGSP6U2fE67Gvy_SYDNEY-162.jpg',
						details: {
							size: 1871426,
							image: {
								width: 4896,
								height: 3264
							}
						},
						fileName: 'tU3ptNgGSP6U2fE67Gvy_SYDNEY-162.jpg',
						contentType: 'image/jpeg'
					}
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '6y0psij2o02YIwGScEo4kS',
				type: 'Asset',
				createdAt: '2018-02-18T14:04:20.140Z',
				updatedAt: '2018-02-18T14:04:20.140Z',
				revision: 1
			},
			fields: {
				title: {
					'en-US': 'Celebration'
				},
				file: {
					'en-US': {
						url: '//images.contentful.com/2fcnblq1yq14/6y0psij2o02YIwGScEo4kS/bf8e90962701acda5f785ee00663cefd/photo-1421986527537-888d998adb74.jpeg',
						details: {
							size: 465358,
							image: {
								width: 2509,
								height: 1673
							}
						},
						fileName: 'photo-1421986527537-888d998adb74.jpeg',
						contentType: 'image/jpeg'
					}
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '149UafeyfcGSoOmESmmYSA',
				type: 'Asset',
				createdAt: '2018-02-18T14:04:20.132Z',
				updatedAt: '2018-02-18T14:04:20.132Z',
				revision: 1
			},
			fields: {
				title: {
					'en-US': 'Janine'
				},
				description: {
					'en-US': 'Profile pic'
				},
				file: {
					'en-US': {
						url: '//images.contentful.com/2fcnblq1yq14/149UafeyfcGSoOmESmmYSA/bf8e90962701acda5f785ee00663cefd/FI01.png',
						details: {
							size: 12940,
							image: {
								width: 128,
								height: 128
							}
						},
						fileName: 'FI01.png',
						contentType: 'image/png'
					}
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '1zY02V76cUsM6yWycWqyk6',
				type: 'Asset',
				createdAt: '2018-02-18T14:04:20.111Z',
				updatedAt: '2018-02-18T14:04:20.111Z',
				revision: 1
			},
			fields: {
				title: {
					'en-US': 'Air Baloon'
				},
				file: {
					'en-US': {
						url: '//images.contentful.com/2fcnblq1yq14/1zY02V76cUsM6yWycWqyk6/bf8e90962701acda5f785ee00663cefd/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg',
						details: {
							size: 4328734,
							image: {
								width: 5184,
								height: 3456
							}
						},
						fileName: 'bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg',
						contentType: 'image/jpeg'
					}
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '5DGRkcoj9mAgwkgGyKMuwe',
				type: 'Asset',
				createdAt: '2018-02-18T14:04:20.110Z',
				updatedAt: '2018-02-18T14:04:20.110Z',
				revision: 1
			},
			fields: {
				title: {
					'en-US': 'Pie in the sky'
				},
				file: {
					'en-US': {
						url: '//images.contentful.com/2fcnblq1yq14/5DGRkcoj9mAgwkgGyKMuwe/bf8e90962701acda5f785ee00663cefd/EOZpjI3oSqKPNnF2S4Tp_Untitled.jpg',
						details: {
							size: 2076159,
							image: {
								width: 4080,
								height: 2720
							}
						},
						fileName: 'EOZpjI3oSqKPNnF2S4Tp_Untitled.jpg',
						contentType: 'image/jpeg'
					}
				}
			}
		}
	],
	entries: [
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '2MtVnLk3wIiAgOC6OG6qS4',
				type: 'Entry',
				createdAt: '2018-02-18T14:04:19.350Z',
				updatedAt: '2018-02-18T14:04:19.350Z',
				revision: 1,
				contentType: {
					sys: {
						type: 'Link',
						linkType: 'ContentType',
						id: '1xYw5JsIecuGE68mmGMg20'
					}
				}
			},
			fields: {
				title: {
					'en-US': 'The Golden Gate Bridge'
				},
				photo: {
					'en-US': {
						sys: {
							type: 'Link',
							linkType: 'Asset',
							id: '2czUZ3VWIc68cyOoyGY4MW'
						}
					}
				},
				imageCaption: {
					'en-US': 'The bridge, as seen on a cloudy day'
				},
				imageCredits: {
					'en-US': 'Chris Brignola // http://www.avelamedia.com/'
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '2YhtjbebgscIwO2keYEa4O',
				type: 'Entry',
				createdAt: '2018-02-18T14:04:19.303Z',
				updatedAt: '2018-02-18T14:04:19.303Z',
				revision: 1,
				contentType: {
					sys: {
						type: 'Link',
						linkType: 'ContentType',
						id: '1xYw5JsIecuGE68mmGMg20'
					}
				}
			},
			fields: {
				title: {
					'en-US': 'Air Baloon'
				},
				photo: {
					'en-US': {
						sys: {
							type: 'Link',
							linkType: 'Asset',
							id: '1zY02V76cUsM6yWycWqyk6'
						}
					}
				},
				imageCaption: {
					'en-US': 'Up in the air'
				},
				imageCredits: {
					'en-US': 'Austin Ban // http://austinban.com/'
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '3eL4DUKKdyqGIQm2M6SaCe',
				type: 'Entry',
				createdAt: '2018-02-18T14:04:19.282Z',
				updatedAt: '2018-02-18T14:04:19.282Z',
				revision: 1,
				contentType: {
					sys: {
						type: 'Link',
						linkType: 'ContentType',
						id: '1xYw5JsIecuGE68mmGMg20'
					}
				}
			},
			fields: {
				title: {
					'en-US': 'The Flower'
				},
				photo: {
					'en-US': {
						sys: {
							type: 'Link',
							linkType: 'Asset',
							id: '26PCF5jzziyeiessOOY0o0'
						}
					}
				},
				imageCaption: {
					'en-US': 'Right in your backyard'
				},
				imageCredits: {
					'en-US': 'John French // http://johnmfrench.tumblr.com/'
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '4MA2xHUeLeKaAs2K4Kqiog',
				type: 'Entry',
				createdAt: '2018-02-18T14:04:19.127Z',
				updatedAt: '2018-02-18T14:04:19.127Z',
				revision: 1,
				contentType: {
					sys: {
						type: 'Link',
						linkType: 'ContentType',
						id: '1xYw5JsIecuGE68mmGMg20'
					}
				}
			},
			fields: {
				title: {
					'en-US': 'City Street'
				},
				photo: {
					'en-US': {
						sys: {
							type: 'Link',
							linkType: 'Asset',
							id: 'geptFDHuzQa8oA2Ywmiew'
						}
					}
				},
				imageCaption: {
					'en-US': 'Taken in San Sebastian'
				},
				imageCredits: {
					'en-US': 'Oscar Nillson // http://oscr.se/'
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '4DyrC6MPp6Ws8UmQEQIGUc',
				type: 'Entry',
				createdAt: '2018-02-18T14:04:19.089Z',
				updatedAt: '2018-02-18T14:04:19.089Z',
				revision: 1,
				contentType: {
					sys: {
						type: 'Link',
						linkType: 'ContentType',
						id: '38nK0gXXIccQ2IEosyAg6C'
					}
				}
			},
			fields: {
				name: {
					'en-US': 'Janine McKay'
				},
				twitterHandle: {
					'en-US': '@contentful'
				},
				profilePhoto: {
					'en-US': {
						sys: {
							type: 'Link',
							linkType: 'Asset',
							id: '149UafeyfcGSoOmESmmYSA'
						}
					}
				},
				biography: {
					'en-US': 'Janine is our communications manager. Coming from the South of Germany via London, she enjoys the newest electronica, Japanese candy and literary discussions about the choices of tragic heroes.'
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '67rvVwLG3mMsucCsaKgaMi',
				type: 'Entry',
				createdAt: '2018-02-18T14:04:18.646Z',
				updatedAt: '2018-02-18T14:04:18.646Z',
				revision: 1,
				contentType: {
					sys: {
						type: 'Link',
						linkType: 'ContentType',
						id: '1xYw5JsIecuGE68mmGMg20'
					}
				}
			},
			fields: {
				title: {
					'en-US': 'The world on a digital screen'
				},
				photo: {
					'en-US': {
						sys: {
							type: 'Link',
							linkType: 'Asset',
							id: '3nCIlsuVKwQysuMcKGuUA4'
						}
					}
				},
				imageCaption: {
					'en-US': 'From the personal archive'
				},
				imageCredits: {
					'en-US': 'Jay Wennington // http://jaywennington.tumblr.com/'
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '5dT4Tgc7gQCuyGSGiakqYC',
				type: 'Entry',
				createdAt: '2018-02-18T14:04:18.151Z',
				updatedAt: '2018-02-18T14:04:18.151Z',
				revision: 1,
				contentType: {
					sys: {
						type: 'Link',
						linkType: 'ContentType',
						id: '1xYw5JsIecuGE68mmGMg20'
					}
				}
			},
			fields: {
				title: {
					'en-US': "It's a Celebration"
				},
				photo: {
					'en-US': {
						sys: {
							type: 'Link',
							linkType: 'Asset',
							id: '6y0psij2o02YIwGScEo4kS'
						}
					}
				},
				imageCaption: {
					'en-US': 'From the personal archive'
				},
				imageCredits: {
					'en-US': 'Morgan Sessions // http://www.morgansessions.com/'
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '3rzf72XFm8aQU4oMOci8WY',
				type: 'Entry',
				createdAt: '2018-02-18T14:04:18.130Z',
				updatedAt: '2018-02-18T14:04:18.130Z',
				revision: 1,
				contentType: {
					sys: {
						type: 'Link',
						linkType: 'ContentType',
						id: '1xYw5JsIecuGE68mmGMg20'
					}
				}
			},
			fields: {
				title: {
					'en-US': 'Pie in the Sky'
				},
				photo: {
					'en-US': {
						sys: {
							type: 'Link',
							linkType: 'Asset',
							id: '5DGRkcoj9mAgwkgGyKMuwe'
						}
					}
				},
				imageCaption: {
					'en-US': 'Taken at Woods Hole'
				},
				imageCredits: {
					'en-US': 'Dogancan Ozturan // http://dogancan.org/'
				}
			}
		},
		{
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: '2fcnblq1yq14'
					}
				},
				id: '54O5P32wmcY0wiAY0ewA2e',
				type: 'Entry',
				createdAt: '2018-02-18T14:04:18.114Z',
				updatedAt: '2018-02-18T14:04:18.114Z',
				revision: 1,
				contentType: {
					sys: {
						type: 'Link',
						linkType: 'ContentType',
						id: '7leLzv8hW06amGmke86y8G'
					}
				}
			},
			fields: {
				title: {
					'en-US': 'The World Around Me: The Best of Young Photography'
				},
				slug: {
					'en-US': 'the-world-around-me-the-best-of-young-photography'
				},
				author: {
					'en-US': {
						sys: {
							type: 'Link',
							linkType: 'Entry',
							id: '4DyrC6MPp6Ws8UmQEQIGUc'
						}
					}
				},
				coverImage: {
					'en-US': {
						sys: {
							type: 'Link',
							linkType: 'Asset',
							id: '6y0psij2o02YIwGScEo4kS'
						}
					}
				},
				description: {
					'en-US': 'All the images in the gallery taken from “[Unsplash](https://unsplash.com/)” photo project.'
				},
				images: {
					'en-US': [
						{
							sys: {
								type: 'Link',
								linkType: 'Entry',
								id: '5dT4Tgc7gQCuyGSGiakqYC'
							}
						},
						{
							sys: {
								type: 'Link',
								linkType: 'Entry',
								id: '67rvVwLG3mMsucCsaKgaMi'
							}
						},
						{
							sys: {
								type: 'Link',
								linkType: 'Entry',
								id: '2MtVnLk3wIiAgOC6OG6qS4'
							}
						},
						{
							sys: {
								type: 'Link',
								linkType: 'Entry',
								id: '3rzf72XFm8aQU4oMOci8WY'
							}
						},
						{
							sys: {
								type: 'Link',
								linkType: 'Entry',
								id: '4MA2xHUeLeKaAs2K4Kqiog'
							}
						},
						{
							sys: {
								type: 'Link',
								linkType: 'Entry',
								id: '3eL4DUKKdyqGIQm2M6SaCe'
							}
						},
						{
							sys: {
								type: 'Link',
								linkType: 'Entry',
								id: '2YhtjbebgscIwO2keYEa4O'
							}
						}
					]
				},
				tags: {
					'en-US': [
						'city',
						'lens',
						'bridge',
						'bar',
						'people',
						'perspective',
						'macro',
						'close up',
						'baloon'
					]
				},
				date: {
					'en-US': '2015-01-30'
				},
				location: {
					'en-US': {
						lon: 13.404953999999975,
						lat: 52.52000659999999
					}
				}
			}
		}
	],
	lastSync: {
		didSucceed: true,
		addedEntries: [],
		deletedEntries: [],
		addedAssets: [],
		deletedAssets: [],
		date: 'Sun, 18 Feb 2018 14:18:53 GMT'
	},
	isSyncing: false,
	nextSyncToken: 'NEXT_TOKEN'
};
