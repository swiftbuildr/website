---
layout: blog-post
title: Using protocols to improve testability
date: "2018-02-06 05:30"
description: How to use protocols improve the testability of your code
tags: [unit-testing, protocols, mocking, testing]
---

Testing certain objects can be tough. Abstracting a classes functionality out to a protocol can make this easier.

So lets say we have a class MusicService which has a method that goes away to the network and requests songs `func getSongs(:)`.

This function has a completionBlock which is invoked when the network has responded with an error, or with the model objects it has created from the successful response.

By the use of protocols we've made the service easily testable. See below:

```swift
struct Song {
    let title: String
    let artist: String
    let album: String
}

protocol MusicService {
    func getSongs(completionBlock: (songs: [Song], error: Error?)->())
}

struct NetworkMusicService: MusicService {
    func getSongs(completionBlock: (songs: [Song], error: Error?)->()) {

        // fetch data from network
        // ....
        // ....
        completion(songs: songs, error: nil)
    }
}

struct MockMusicService: MusicService {
    func getSongs(completionBlock: (songs: [Song], error: Error?)->()) {
        completion(songs: [Song(),Song(),Song()], error: nil)
    }
}
```
