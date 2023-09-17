import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import PostService from './post.service'
import CreatePostDto from './dto/createPost.dto'
import UpdatePostDto from './dto/updatePost.dto'

@Controller('posts')
export default class PostController {
  //constructor() {}
  constructor(private readonly postService: PostService) {}

  @Get()
  getAllPosts() {
    return this.postService.getAllPosts()
    //return 'getAllPosts'
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(Number(id))
    //return 'getPostById:' + id
  }

  @Post()
  //async createPost(@Body() post: any) {
  async createPost(@Body() post: CreatePostDto) {
    return this.postService.createPost(post)
    //console.log('createPost::recieveData:', post)
    //return 'createPost'
  }

  @Put(':id')
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    //console.log('replacePost::recieveData:', post)
    //return 'replacePost' + id
    return this.postService.replacePost(Number(id), post)
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    //return 'deletePost' + id
    this.postService.deletePost(Number(id))
  }
}
